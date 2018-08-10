(function() {
    'use strict';

    angular
        .module('test.checkout')
        .controller('CheckoutCtrl', CheckoutCtrl);

    CheckoutCtrl.$inject = ['$state','notify','cartData','dicountData', 'checkOutData'];

    function CheckoutCtrl($state, notify, cartData, dicountData, checkOutData) {
        var vm = this;
        var cart = cartData.getCart();
        if(!cart){
            notify({message:'Cart data not found',position:'right',classes:'alert-error'});
            $state.go('pizza');
            return;
        }
        this.total = cart.total;
        this.nettotal = cart.total;
        // this.total =  50;
        // this.nettotal =  50;
        this.code = "";
        this.ApplyedCoupon = "";
        this.isCuponApply = false;
        this.back = () => {
            $state.go('pizza');
        }        

        this.applyCode = () => {
            dicountData.check(this.code)
            .then(responce => {
                var discountData = responce.data.data;
                this.nettotal = this.total - ((this.total/100) * discountData.discountPercentage);
                this.isCuponApply = true;
                this.ApplyedCoupon = this.code;
                notify({message:'Coupon Applyed Sucess',position:'right'});
            }).catch(err => {
                if(err.status === 404){
                    notify({message:'Coupon Code not found',position:'right',classes:'alert-error'});
                }
            });
        }

        this.checkOut = () => {
            var order = {
                name:"pizza",
                ingredients:cart.ingridians,
                "grossAmount": this.total,
                "netAmount":this.nettotal,
                "cuponCode":this.ApplyedCoupon
            }
            checkOutData.order(order).then(res => {
                notify({message:'Sucess Order Done',position:'right'});
                $state.go('pizza');
            }).catch(err => {
                notify({message:err,position:'right',classes:'alert-error'});
            });
        }
    }
})();
