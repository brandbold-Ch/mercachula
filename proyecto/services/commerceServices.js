const Commerce = require("../models/commerce");
const { connect, cloudinary }= require("../api/connection/connection");
const User = require("../models/user");


class CommerceServices {

    constructor () {}

    async uploadImage(buffer) {
        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ resource_type: "auto" }, (error, result) => {
                if (error) { reject(error); }
                resolve({
                    url: result["url"],
                    id: result["public_id"]
                });
            }).end(buffer);
        });
    }

    async deleteImage(img_id) {
        if (img_id) {
            await cloudinary.api.delete_resources(
                [img_id], { type: 'upload', resource_type: 'image' }
            );
        }
    }

    async createCommerce(id, commerce_data) {
        const user_context = await User.findById(id);
        const session = await connect.startSession();
        let output_data;

        await session.withTransaction(async () =>{

            await Commerce.create([
                {
                    user_ID: user_context["_id"],
                    tipo: commerce_data[0]["tipo"],
                    NombreComercio: commerce_data[0]["NombreComercio"],
                    Descripcion: commerce_data[0]["Descripcion"],
                    LinkUbicacion: commerce_data[0]["LinkUbicacion"],
                    NumeroContacto: commerce_data[0]["NumeroContacto"]
                }

            ], { session })
                .then((commerce) => {
                    output_data = commerce;
                });
        })
            .then(async () => {
                const newImage = await this.uploadImage(commerce_data[1][0]["buffer"]);

                await Commerce.updateOne(
                    { _id: output_data[0]["_id"], user_ID :id},
                    {$set: {image: newImage}},
                    {runValidators: true}
                );
            });
        await session.endSession();
    }

    async getCommerce(id, commerce_id) {
        return Commerce.findById({ _id: commerce_id, user: id });
    }

    async updateCommerce(id, commerce_id, commerce_data) {
        const commerce_context = await this.getCommerce(id, commerce_id);
        const session = await connect.startSession();

        await session.withTransaction(async () => {
           await Commerce.updateOne(
               { _id: commerce_id, user_ID: id },
               {
                   $set: {
                       user_ID: commerce_context["user_ID"],
                       tipo: commerce_data[0]["tipo"],
                       Descripcion: commerce_data[0]["Descripcion"],
                       LinkUbicacion: commerce_data[0]["LinkUbicacion"],
                       NumeroContacto: commerce_data[0]["NumeroContacto"],
                       image: commerce_context["image"]
                   }
               },
               {
                   runValidators: true
               },
               {session}
           );
        })
            .then(async () => {
                if (commerce_data[1].length) {
                    await this.deleteImage(commerce_context["image"]["id"]);
                    const newImage = await this.uploadImage(commerce_data[1][0]["buffer"]);

                    await Commerce.updateOne(
                        {_id: commerce_id, user_ID: id},
                        {$set: {image: newImage}},
                        {runValidators: true}
                    );
                }
            });
        await session.endSession();
    }

    async deleteCommerce(id, commerce_id) {
        const commerce_context = await this.getCommerce(id, commerce_id);
        const session = await connect.startSession();

        await session.withTransaction(async () => {
            await Commerce.deleteOne({_id: commerce_id, user_ID: id});
        })
            .then(async () => {
                await this.deleteImage(commerce_context["image"]["id"]);
            })
        await session.endSession();
    }

    async getCommerces(id) {
        return Commerce.find({ user_ID: id});
    }
}

module.exports = CommerceServices;
