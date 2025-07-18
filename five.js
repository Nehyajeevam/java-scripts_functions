class Account{
      open_Account(){
        console.log("account opened")
        this.deposit_Amount(5000);
      }
      deposit_Amount(amount) {
        console.log("Deposited amount:", amount);
      }
}
var a1 = new Account();
a1.open_Account();
a1.deposit_Amount(5000);