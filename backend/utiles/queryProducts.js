class queryProducts {
    products = [];
    query = {};
    constructor(products, query) {
        this.products = products; 
        this.query = query;
    }

    categoryQuery = () => {
        if (this.query.category) {
            this.products = this.products.filter(c => c.category === this.query.category);
        }
        return this;
    }

    locationQuery = () => {
        if (this.query.location) {
            this.products = this.products.filter(p => p.location === this.query.location);
        }
        return this;
    }

    ratingQuery = () => {
        if (this.query.rating) {
            this.products = this.products.filter(c => 
                parseInt(this.query.rating) <= c.rating && 
                c.rating < parseInt(this.query.rating) + 1
            );
        }
        return this;
    }

    priceQuery = () => {
        if (this.query.lowPrice !== undefined && this.query.highPrice !== undefined) {
            this.products = this.products.filter(p => 
                p.price >= this.query.lowPrice && 
                p.price <= this.query.highPrice
            );
        }
        return this;
    }

    searchQuery = () => {
        if (this.query.searchValue) {
            this.products = this.products.filter(p => 
                p.name.toUpperCase().includes(this.query.searchValue.toUpperCase())
            );
        }
        return this;
    }

    sortByPrice = () => {
        if (this.query.sortPrice) {
            this.products = this.query.sortPrice === 'low-to-high' 
                ? this.products.sort((a, b) => a.price - b.price)
                : this.products.sort((a, b) => b.price - a.price);
        }
        return this;
    }

    skip = () => {
        const { pageNumber } = this.query;
        const skipPage = (parseInt(pageNumber) - 1) * this.query.parPage;
        this.products = this.products.slice(skipPage);
        return this;
    }

    limit = () => {
        this.products = this.products.slice(0, this.query.parPage);
        return this;
    }

    getProducts = () => {
        return this.products;
    }

    countProducts = () => {
        return this.products.length;
    }
}

module.exports = queryProducts;
