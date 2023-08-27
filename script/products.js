class Products{
    constructor(){
        this.products = document.getElementById('items');
        this.setData();
    }
    items(){
        var data = [
            {"img":"1.jpg", "title":"Chardon Honey 1", "subTitle":"Natural 100%", "price1":30.00, "price2":19.99},
            {"img":"2.jpg", "title":"Chardon Honey 2", "subTitle":"Natural 90%", "price1":90.00, "price2":79.99},
            {"img":"3.jpg", "title":"Chardon Honey 3", "subTitle":"Natural 100%", "price1":70.00, "price2":59.99},
            {"img":"1.jpg", "title":"Chardon Honey 4", "subTitle":"Natural 70%", "price1":50.00, "price2":39.99},
            {"img":"2.jpg", "title":"Chardon Honey 4", "subTitle":"Natural 100%", "price1":100.00, "price2":90.99},
            {"img":"3.jpg", "title":"Chardon Honey 5", "subTitle":"Natural 100%", "price1":10.00, "price2":9.99},
            {"img":"1.jpg", "title":"Chardon Honey 6", "subTitle":"Natural 50%", "price1":40.00, "price2":29.99},
            {"img":"2.jpg", "title":"Chardon Honey 7", "subTitle":"Natural 100%", "price1":30.00, "price2":19.99},  
            {"img":"3.jpg", "title":"Chardon Honey 8", "subTitle":"Natural 100%", "price1":300.00, "price2":150.99},  
            {"img":"1.jpg", "title":"Chardon Honey 9", "subTitle":"Natural 70%", "price1":200.00, "price2":170.99},
            {"img":"2.jpg", "title":"Chardon Honey 4", "subTitle":"Natural 100%", "price1":100.00, "price2":90.99},
            {"img":"1.jpg", "title":"Chardon Honey 6", "subTitle":"Natural 50%", "price1":40.00, "price2":29.99},


        ];
        return data;
    }

    setData(){
        var prds = this.items();
        prds.forEach(item => {
            this.products.innerHTML += `
            <div id="item" class="card">
              <a id="img_link" href="">
                <img src="img/${item.img}" alt="Card image cap" >
              </a>
              <a id="content_link" href="">
                <div>
                  <h4> ${item.title} </h4>
                  <p> ${item.subTitle} </p>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star-half-o checked"></span>
                  </div>
                  <strike class="price1">$ ${item.price1} </strike>
                  <h5 class="price"> $ ${item.price2}</h5>
                </a>  
                  <a href="#" id="btn" class="btn btn-warning">Buy now</a>
                </div>  
            </div>
            `;   
        });
    }
}

onload = new Products();
