const CommerceServices = require("../../services/commerceServices");


const commerce = new CommerceServices();

exports.createCommerce = async (req, res) => {
    try {
        await commerce.createCommerce(req.id, [req.body, req.files]);

        res.status(201).json({
            message: "Added commerce",
            data: req.body
        });

    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

exports.getCommerce = async (req, res) => {
    try{
        res.status(200).json(await commerce.getCommerce(req.id, req.params.commerce_id));

    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

exports.updateCommerce = async (req, res) => {
    try {
        await commerce.updateCommerce(req.id, req.params.commerce_id, [req.body, req.files]);
        res.status(202).json({
            message: "Updated commerce",
            data: req.body
        });

    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

exports.deleteCommerce = async (req, res) => {
    try {
        await commerce.deleteCommerce(req.id, req.params.commerce_id);
        res.status(204).end();

    } catch(err) {
        res.status(500).json({message: err.message});
    }
}
