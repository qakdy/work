describe('console log test', function(){

    before(function(){
        console.log('Before All Test Cases')
    }),

    after(function(){
        console.log('After All Test Cases')
    }),

    beforeEach(function(){
        console.log('Before Each Test case')
    }),

    afterEach(function(){
        console.log('After Each Test case')
    })
   
    it('first test', function(){
        console.log('First Test Cases')
    }),

    it('second test', function(){
        console.log('Second Test Case')
    })
});


 