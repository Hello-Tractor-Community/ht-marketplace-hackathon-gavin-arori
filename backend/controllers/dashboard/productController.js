const formidable = require('formidable')
const cloudinary = require('cloudinary').v2
const productModel = require('../../models/productModel');
const { responseReturn } = require('../../utiles/response');
class productController {
    add_product = async (req, res) => {
        const { id } = req;
        const form = formidable({ multiples: true });
    
        form.parse(req, async (err, field, files) => {
            if (err) {
                return responseReturn(res, 500, { error: "Error parsing the form data" });
            }
    
            let { name, category, description, stock, price, discount, shopName, brand, city, state, country } = field;
            const { images } = files;
            name = name.trim();
            const slug = name.split(' ').join('-');
    
            cloudinary.config({
                cloud_name: process.env.cloud_name,
                api_key: process.env.api_key,
                api_secret: process.env.api_secret,
                secure: true
            });
    
            try {
                let allImageUrl = [];
    
                
                const imageFiles = Array.isArray(images) ? images : [images];
    
                for (let i = 0; i < imageFiles.length; i++) {
                    const fileType = imageFiles[i].mimetype.split('/')[1].toLowerCase();
                    
                    
                    if (!['jpeg', 'jpg', 'png', 'gif'].includes(fileType)) {
                        throw new Error(`Unsupported file type: ${fileType}`);
                    }
    
                    
                    const result = await cloudinary.uploader.upload(imageFiles[i].filepath, { folder: 'products' });
                    allImageUrl.push(result.url);
                }
    
                await productModel.create({
                    sellerId: id,
                    name,
                    slug,
                    shopName,
                    category: category.trim(),
                    description: description.trim(),
                    stock: parseInt(stock),
                    price: parseInt(price),
                    discount: parseInt(discount),
                    images: allImageUrl,
                    brand: brand.trim(),
                    location: {
                        city: city.trim(),
                        state: state.trim(),
                        country: country.trim(),
                    }
                });
                responseReturn(res, 201, { message: "Product added successfully" });
            } catch (error) {
                responseReturn(res, 500, { error: error.message });
            }
        });
    };

    products_get = async (req, res) => {
        const { page, searchValue, parPage } = req.query
        const { id } = req;

        const skipPage = parseInt(parPage) * (parseInt(page) - 1);

        try {
            if (searchValue) {
                const products = await productModel.find({
                    $text: { $search: searchValue },
                    sellerId: id
                }).skip(skipPage).limit(parPage).sort({ createdAt: -1 })
                const totalProduct = await productModel.find({
                    $text: { $search: searchValue },
                    sellerId: id
                }).countDocuments()
                responseReturn(res, 200, { totalProduct, products })
            } else {
                const products = await productModel.find({ sellerId: id }).skip(skipPage).limit(parPage).sort({ createdAt: -1 })
                const totalProduct = await productModel.find({ sellerId: id }).countDocuments()
                responseReturn(res, 200, { totalProduct, products })
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    product_get = async (req, res) => {
        const { productId } = req.params;
        try {
            const product = await productModel.findById(productId)
            responseReturn(res, 200, { product })
        } catch (error) {
            console.log(error.message)
        }
    }

    product_update = async (req, res) => {
        let { name, description, discount, price, brand, productId, stock, city, state, country} = req.body;
        name = name.trim();
        name = name.trim()
        const slug = name.split(' ').join('-')
        try {
            await productModel.findByIdAndUpdate(productId, {
                name, description, discount, price, brand, productId, stock, slug,
                location: {
                    city: city.trim(),
                    state: state.trim(),
                    country: country.trim(),
                }
            })
            const product = await productModel.findById(productId)
            responseReturn(res, 200, { product, message: 'product update success' })
        } catch (error) {
            responseReturn(res, 500, { error: error.message })
        }
    }

    product_delete = async (req, res) => {
        const { productId } = req.params;
        try {
            const deletedProduct = await productModel.findByIdAndDelete(productId);
            if (!deletedProduct) {
                return responseReturn(res, 404, { error: 'Product not found' });
            }
            responseReturn(res, 200, { message: 'Product deleted successfully', productId });
        } catch (error) {
            responseReturn(res, 500, { error: error.message });
        }
    };
    product_image_update = async (req, res) => {
        const form = formidable({ multiples: true })

        form.parse(req, async (err, field, files) => {
            const { productId, oldImage } = field;
            const { newImage } = files

            if (err) {
                responseReturn(res, 404, { error: err.message })
            } else {
                try {
                    cloudinary.config({
                        cloud_name: process.env.cloud_name,
                        api_key: process.env.api_key,
                        api_secret: process.env.api_secret,
                        secure: true
                    })
                    const result = await cloudinary.uploader.upload(newImage.filepath, { folder: 'products' })

                    if (result) {
                        let { images } = await productModel.findById(productId)
                        const index = images.findIndex(img => img === oldImage)
                        images[index] = result.url;

                        await productModel.findByIdAndUpdate(productId, {
                            images
                        })

                        const product = await productModel.findById(productId)
                        responseReturn(res, 200, { product, message: 'product image update success' })
                    } else {
                        responseReturn(res, 404, { error: 'image upload failed' })
                    }
                } catch (error) {
                    responseReturn(res, 404, { error: error.message })
                }
            }
        })
    }
}

module.exports = new productController()