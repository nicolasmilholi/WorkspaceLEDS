"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({
            tex: 'The API: /api/games/'
        });
    }
}
exports.indexController = new IndexController();
