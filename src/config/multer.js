const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    storage: multer.diskStorage({
        destination: function (req, file, cb){
            cb(null, path.resolve(__dirname, '..', '..', 'public', 'uploads'));
        },
        filename: function (req, file, cb){
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err);

                const fileName = `${hash.toString('hex')}-${Date.now()}-${file.originalname}`;

                cb(null, fileName);
            })
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];

        if(allowMimes.includes(file.mimetype)){
            cb(null, true);
        }
        else{
            cb(new Error('Invalid format!'))
        }
    }


}