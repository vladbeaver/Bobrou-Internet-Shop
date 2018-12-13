

!function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
            return e[t]
        }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function (e, t) {
    console.log("Hello!"), console.log("The time is ".concat(new Date));


    var i, r = 1, o = [], n = {}, s = !1;

    // Exmpl $("button").click(function(){
    //     $("p").removeClass("intro");
    // });
    // function myFunction() {
    //     var element = document.getElementById("myDIV");
    //     element.classList.add("mystyle");
    // }
    function removeOBJ() {
        s ? ($("#cart_menu").removeClass("cart_shaker"), $(".no_product").removeClass("cart_loc"), s = !1) : (cart(), $("#cart_menu").addClass("cart_shaker"), $(".no_product").addClass("cart_loc"), s = !0)
    }

    // CART, namely Korzinka

    function cart() {
        if (function (t) {
            // hasOwnProperty() method returns a boolean indicating
            // whether the object has the specified property
            // as its own property (as opposed to inheriting it)
            for (var a in t) if (t.hasOwnProperty(a)) return !1;
            // JSON.stringify() method converts a JavaScript object or value to a JSON string
            return JSON.stringify(t) === JSON.stringify({})
        }(n)) {
            a = '<p style="text-align: center;;margin: 0px; padding-bottom: 4px;">CART</p>';
            a += "<p>There is no product in the C A R T</p>", $("#cart_menu").html(a)
        } else {
            var t = 0,
                a = '<p style="text-align: center;border-bottom: 1px solid #ccc;margin: 0px; padding-bottom: 4px;">C A R T</p>';
            for (var e in a += '<div style="border-bottom: 1px solid #ccc;">', n) a += '<div id="cart-dd">', a += '<div class="list_in_cart">', a += '<img data-art="' + e + '" class="included_item_img" src="../images/ok.png">', a += '<p class="good" data-art="' + e + '">' + n[e].name + "</p>", a += '<div class="quantity">', a += '<img data-art="' + e + '" class="left-img" src="../images/plus.png">', a += '<p class="cart-p">' + n[e].quantity + "</p>", a += '<img data-art="' + e + '" class="right-img" src="../images/minus.png">', a += "</div>", a += "</div>", a += "</div>", t += parseFloat(n[e].price) * n[e].quantity;
            a += "</div>", a += "<p>Total Sum: " + t + " UAH </p>", a += '<button class="checkout_button" id="checkout">SUBMIT ORDER</button>', $("#cart_menu").html(a), $("button#checkout").on("click", function () {
                removeOBJ(), function (t) {
                    $("#dialog").fadeIn(1000), $(".container").addClass("checkout_background"), $("footer").addClass("fix");
                    var a = "";
                    for (var e in a += '<p style="text-transform:uppercase; font-weight: bold; ">To complete the order fill in the fields below and click "SUBMIT ORDER" button</p>', a += '<div class="checkout_order">', n) a += "<p>" + n[e].name + " (" + n[e].quantity + " quantity.)</p>";
                    a += "</div>", a += '<p class="total_sum">Total Sum: ' + t + " UAH</p>", a += '<div style="margin-bottom:10px; ">', a += '<form name="ordr" action="" method="post">', a += "<p>Full Name: </p>", a += '<input name="name" id="n1" type="text"  placeholder="John Smith..." required>', a += "<p>Phone Number</p>", a += '<input name="phone" id="p1" placeholder="+380..." type="tel" required>', a += "<p>Email Address</p>", a += '<input name="email" id="e1" type="tel" placeholder="something@gmail.com..." required>', a += "</form>", a += "</div>", a += '<button class="checkout_button" id="send">SUBMIT ORDER</button>', $(".checkout_inner").html(a), $("button#send").on("click", function () {
                        var t, a = new FormData(document.forms.ordr);
                        for (var e in console.log(n), n) t = parseInt(e) + 1, a.append("products[" + t + "]", n[e].quantity);
                        a.append("token", "7dBYtmSBbxK7D8ik2YQj");
                        var i = new XMLHttpRequest;
                        i.open("POST", "https://nit.tron.net.ua/api/order/add"), i.onreadystatechange = function () {
                            if (4 === i.readyState && 200 === i.status) if (i.responseText.indexOf("error") > 0) alert("Oppss :(  Please, check if you input all correctly!"); else {
                                for (var t in n) delete n[t];
                                $(".checkout_inner").html("<p>Your order successfully went through. Please, wait, our Billing Manager will contact you in few minutes ;)</p>"), localStorage.setItem("cart", JSON.stringify(n))
                            }
                        }, i.send(a)
                    })
                }(t)
            }), $("p.good").on("click", function () {
                var t = $(this).attr("data-art");
                removeOBJ(), checkout(t)
            }), $("img.included_item_img").on("click", function () {
                var t = $(this).attr("data-art");
                n[t].quantity = 0, delete n[t], cart(), localStorage.setItem("cart", JSON.stringify(n))
            }), $("img.left-img").on("click", function () {
                var t = $(this).attr("data-art");
                n[t].quantity++, cart(), localStorage.setItem("cart", JSON.stringify(n))
            }), $("img.right-img").on("click", function () {
                var t = $(this).attr("data-art");
                n[t].quantity > 1 && n[t].quantity--, cart(), localStorage.setItem("cart", JSON.stringify(n))
            })
        }
    }

    function product_list(t) {
        var a = "https://nit.tron.net.ua/api/product/list/category/" + t;
        $.getJSON(a, function (t) {
            var a = "";
            for (var e in a += '<div style="background-color: #fff;">', t) a += '<div class="product_grid">', a += '<div class="goods-img">', a += '<img src="' + t[e].image_url + '">', a += "</div>", a += '<div class="goods-text">', a += '<p class="getDescription" data-art="' + t[e].id + '">' + t[e].name + "</p>", null === t[e].special_price ? a += '<p class="standart_price">' + t[e].price + " грн. </p>" : (a += '<p class="discount">' + t[e].price + " грн. </p>", a += '<p class="price_main">' + t[e].special_price + " грн. </p>"), a += '<button class="button" data-art="' + t[e].id + '" data-art2="' + e + '"> Buy now </button>', a += "</div>", a += "</div>", 0;
            a += "</div>", $("#product").html(a), $("button.button").on("click", function () {
                var a = $(this).attr("data-art"), e = parseInt($(this).attr("data-art2"));
                $("#cart").effect("shake"), void 0 != n[a - 1] ? n[a - 1].quantity++ : (n[a - 1] = {}, n[a - 1].name = t[e].name, n[a - 1].image = t[e].image_url, n[a - 1].quantity = 1, null != t[e].special_price ? n[a - 1].price = t[e].special_price : n[a - 1].price = t[e].price), localStorage.setItem("cart", JSON.stringify(n)), s ? cart() : ($("#cart_menu").addClass("cart_shaker"), $(".no_product").addClass("cart_loc"), s = !0, cart())
            }), $("p.getDescription").on("click", function () {
                checkout($(this).attr("data-art"))
            })
        })
    }

    //Additional Window to submit order
    function checkout(t) {
        // changes the opacity, for selected elements, from hidden to visible
        $("#dialog").fadeIn(), $(".container").addClass("checkout_background"), $("footer").addClass("fix"), $.getJSON("https://nit.tron.net.ua/api/product/" + t, function (t) {
            var a = "";
            a += '<div class="dialog-img">', a += '<img style="float:right;" src="' + t.image_url + '">', a += "</div>", a += '<div class="dialog-right">', a += "<h3 >" + t.name + "</h3>", a += '<div class="dialog-item-info">', a += '<div style="width: 60%;">', a += '<p style="text-transform: uppercase; margin-bottom: 5px;">Product Description: </p>', a += '<p style="font: 75% Arial, sans-serif; margin-top: 5px;">' + t.description + "</p>", a += "</div>", a += '<div class="price_desc">', a += '<p style="text-transform: uppercase; margin: 5px 10px;">Price:</p>', null === t.special_price ? a += '<p class="standart_price">' + t.price + " UAH </p>" : (a += '<p class="discount">' + t.price + " грн. </p>", a += '<p class="price_main">' + t.special_price + " грн. </p>"), a += "</div>", a += '<button class="checkout_button" data-art="' + t.id + '"> Buy now </button>', a += "</div>", a += "</div>", $(".checkout_inner").html(a), $("button.checkout_button").on("click", function () {
                var a = $(this).attr("data-art");
                $("#cart").effect("shake"), void 0 != n[a] ? n[a].quantity++ : (n[a] = {}, n[a].name = t.name, n[a].image = t.image_url, n[a].quantity = 1, null != t.special_price ? n[a].price = t.special_price : n[a].price = t.price), localStorage.setItem("cart", JSON.stringify(n)), s ? cart() : ($("#cart_menu").addClass("cart_shaker"), $(".no_product").addClass("cart_loc"), s = !0, cart())
            })
        })
    }

    $(document).ready(function () {
        $("#dialog").hide(), $(".exit_dialog").on("click", function () {
            $("#dialog").fadeOut(), $(".container").removeClass("checkout_background"), $("footer").removeClass("fix")
        }), $.getJSON("https://nit.tron.net.ua/api/category/list", function (t) {
            var a = "<ul>";
            for (var e in t) a += '<li class="load" data-art="' + t[e].id + '">' + t[e].name + "</li>", o.push(t[e].description);
            a += "</ul>", $("#categories").html(a), $("#ghead").html(o[0]), $(".load:eq(0)").addClass("highlight"), $("li.load").on("click", function () {
                var t = $(this).attr("data-art");
                i !== t && (product_list(t), $("#ghead").html(o[t - 1]), $(".load:eq(" + (r - 1) + ")").removeClass("highlight"), $(".load:eq(" + (t - 1) + ")").addClass("highlight"), r = t, i = t)
            })
        }), product_list(1), null != localStorage.getItem("cart") && (n = JSON.parse(localStorage.getItem("cart"))), console.log(n), $("#cart").on("click", function () {
            removeOBJ()
        })
    })
}, function (t, a, e) {
}]);
