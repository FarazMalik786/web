class footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="footer_container">
            <div class="footer_div">
                <h6 class="footer_title">Your account</h6>
                <a class="footer_a">PERSONAL INFO</a>
                <a class="footer_a">ORDERS</a>
                <a class="footer_a">MY CART</a>
                <a class="footer_a">ADDRESSES</a>
            </div>
            <div class="footer_div">
                <h6 class="footer_title">Customer service</h6>
                <a class="footer_a">MONDAY TO FRIDAY</a>
                <a class="footer_a">10AM - 6.30PM (NEWYORK TIME)</a>
                <a class="footer_a">MY CART</a>
                <a class="footer_a">shopify@zemez.io</a>
            </div>
            <div class="footer_div">
                <h6 class="footer_title">Our guarantees</h6>
                <a class="footer_a">SHIPPING IN 3 DAYS</a>
                <a class="footer_a">FREE RETURNS WITHIN 14 </a>
                <a class="footer_a">SECURE PAYMENTS</a>
                <a class="footer_a">ADDRESSES</a>
            </div>
            <div class="footer_div">
                <h6 class="footer_title">Our company</h6>
                <a class="footer_a">DELIVERY</a>
                <a class="footer_a">PRIVACY POLICY</a>
                <a class="footer_a">CONTACT US</a>
                <a class="footer_a">ADDRESSES</a>
            </div>


        </div>
        <div style="border-top: 1px solid white;padding-left: 2vw;">
            <h4 style="color: white;font-family: sans-serif;">HOLY WEED</h4>
        </div>
    </footer> `
    }
}

class header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <nav id="navbar">
            <p id="Title">SPECIAL
                EDITIONS!
                RECREATIONAL & MEDICAL MARIJUANA!</p>
        </nav>

        <div id="logoSection">
            <div class="drawersection">
                <span onclick="openNav()"><i class="fa-solid fa-bars"></i></span>
                <div id="mySidenav" class="sidenav">
                    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                    <a href="/HomeScreen.html">Home</a>
                    <a href="/Catalog/Catalog.html">Catalog</a>
                    <a href="/Collections/Collections.html">Collections</a>
                    <a href="">Clearance</a>
                    <a href="">Sections all</a>
                    <a href="/Contact_Us/Contact_Us.html">Contact us</a>
                    <hr>
                    <a href="">Wishlist</a>
                    <hr>
                    <p>Account</p>
                    <a href="" class="drawer_catagoriesItem">Account</a>
                    <hr>
                    <p>CURRENCY</p>
                    <a href="" class="drawer_catagoriesItem">USD</a>
                    <a href="" class="drawer_catagoriesItem">EUR</a>
                    <a href="" class="drawer_catagoriesItem">GBP</a>
                </div>
                <div id="dropdown_search">
                    <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </div>

            <div class="dropdown"
                style="position: absolute;left: 0vw;top: 20vh;font-size: 14px;font-family: sans-serif;display: inline-block;">
                <a>USD <i class="fa-solid fa-angle-down"></i></a>
                <div class="menu" style="padding-right: 2vw;">
                    <p>USD <br> EUR <br>GBP </p>
                </div>
            </div>

            <div class="search" style=" display: inline;position: absolute;right: 0vw;top: 20vh;font-family: sans-serif;font-size:
                16px;">
                <a>Search <i class="fa-sharp fa-solid fa-magnifying-glass"></i></a>

                <a>Wishlist <i class="fa-regular fa-heart"></i></a>

                <a href="/Account/Account.html">Account <i class="fa-solid fa-user"></i></a>

                <a>Cart <i class="fa-solid fa-cart-shopping"></i></a>

            </div>
            <div>

                <img src="https://cdn.shopify.com/s/files/1/0425/0818/9859/files/logo_180x80_crop_center@2x.png?v=1613560290"
                    style="max-width: 180px;" />

            </div>
            <div id="categories">
            
            <div class="menuContainer">
                <div class="categories_a"><a id="home" href="/HomeScreen.html">Home</a></div>
                <div class="menu">
                    <p>Home1 <br> Home2 <br>Home3 <br>Home4 <br></p>
                </div>

            </div>

            <div class="categories_a"><a href="/Catalog/Catalog.html">Catalog</a></div>
            <div class="menuContainer">
                <div class="categories_a"><a href="/Collections/Collections.html">Collections</a></div>
                <div class="menu">
                    <p>Home1 <br> Home2 <br>Home3 <br>Home4 <br></p>
                </div>

            </div>

            <div class="categories_a"><a href="/Collections/collections_categories/Accessories.html">Clearance</a></div>
            <div class="categories_a"><a>Sections all</a></div>
            <div class="categories_a"><a href="/Contact_Us/Contact_Us.html">Contact us</a></div>
        </div>

        </div>

    </header>
           `

       
    }
}

customElements.define("web-header", header)
customElements.define("web-footer", footer)
