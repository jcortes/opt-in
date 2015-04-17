describe('optApp', function(){
    var scope, element, compiled, html;
    
    beforeEach(module('optApp'));
    beforeEach(module('login-template1.html'));
    
    beforeEach(inject(function($rootScope, $compile){
        html = "<opt-in><div class=\"brand-logo\" ></div></opt-in>";
        scope = $rootScope.$new();
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();
    }));
    
    it('should render element', function(){
        expect(element.find('div').length).toBe(8);
        expect(element.find('form').length).toBe(1);
        expect(element.find('input').length).toBe(3);
        expect(element.find('h1').length).toBe(1);
        expect(element.find('p').length).toBe(1);
        expect(element.find('button').length).toBe(1);
        
        expect($('input:first-child', element).val()).toEqual('');
        expect($('input:nth(1)', element).val()).toEqual('');
        expect($('input:nth(2)', element).val()).toEqual('');
    });
});