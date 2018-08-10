(function() {
    'use strict';

    angular
        .module('test.pizza')
        .controller('PizzaCtrl', PizzaCtrl);

    PizzaCtrl.$inject = ['$state','pizza','notify','cartData'];

    function PizzaCtrl($state, pizza, notify, cartData) {
        var vm = this;
        this.total = 0;
        this.ingridians = pizza.data.data.ingredients
        this.ingridians = pizza.data.data.ingredients.map(i => {
            i.isValid = true;
            i.data = i.data.map(d => {
                d.selected = false;
                return d;
            });
            return i;
        });
        
        function validate(ingridian){
            let max = ingridian.max || ingridian.data.length + 1;
            let min = (ingridian.required)?1:(ingridian.min || 0);
            let currentSelected = ingridian.data.filter(i => i.selected).length;
            ingridian.isValid = true;
            if(ingridian.required && !currentSelected){
                ingridian.isValid = false;
            }
            if(max < currentSelected){
                ingridian.isValid = false;
            }
            if(min > currentSelected){
                ingridian.isValid = false;
            }
            return ingridian.isValid
        }

        let calculateTotal = () => {
            this.total = 0;
            this.ingridians.map(i => {
                i.data.map(d => {
                    if(d.selected){
                        this.total += d.price;
                    }
                })
            });
        }

        this.selectionChange = function(ingridiansIndex){
            var currentIngridian = this.ingridians[ingridiansIndex];
            validate(currentIngridian);
            calculateTotal();
        }

        this.gotoCheckOut = () => {
            var isInvalid = this.ingridians.map( i => {
                return validate(i);
            }).filter(i => !i).length;
            if(isInvalid){
                notify({message:'Kindly select right toopings. Validation Error',position:'right',classes:'alert-error'});
                return;
            }
            calculateTotal();
            var cart = {
                total:this.total,
                ingridians:this.ingridians.map(i => {
                    var ingridian = {};
                    ingridian.name = i.name;
                    ingridian.data = i.data.filter(i => i.selected);
                    return ingridian
                })
            }
            cartData.addToCart(cart);
            $state.go('checkout');
        }
    }
})();
