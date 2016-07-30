angular.module('demo', [])

.controller('DemoController', function($scope) {
    $scope.data = {
        'header' : [
            {'content' : 'header1', 'classNames' : ['test']},
            {'content' : 'header2', 'classNames' : ['test']},
            {'content' : 'header3', 'classNames' : ['test']},
        ],
        'body' : [
            [
                {'classNames' : ['bodytest'], 'contentList': [{'tagContent' : '123'}, {'tagName' : 'span', 'className' : [], 'tagContent' : 'spancontent'}, {'tagName' : 'span', 'className' : [], 'tagContent' : 'spancontent'}]},
                {'classNames' : ['bodytest'], 'contentList': [{'tagContent' : '123'}, {'tagName' : 'span', 'className' : [], 'tagContent' : 'spancontent'}, {'tagName' : 'span', 'className' : [], 'tagContent' : 'spancontent'}]},
                {'classNames' : ['bodytest'], 'contentList': [{'tagContent' : '123'}, {'tagName' : 'span', 'className' : [], 'tagContent' : 'spancontent'}, {'tagName' : 'span', 'className' : [], 'tagContent' : 'spancontent'}]},
                {'classNames' : ['bodytest'], 'contentList': [{'tagContent' : '123'}, {'tagName' : 'span', 'className' : [], 'tagContent' : 'spancontent'}, {'tagName' : 'span', 'className' : [], 'tagContent' : 'spancontent'}]}
            ]
        ]
    };
})

.directive('customTable', function($scope) {
    function rendorHeader() {
        var thstr = '';
        for (var i = 0; i < $scope.data.header.length; i++) {
            var tmp = $scope.data.header[i];
            thclassstr = '';
            for (var i = 0; i < tmp.classNames.length; i++) {
                thclassstr += tmp.classNames[i] + ' ';
            };
            thstr = '<th ' + 'class="' + thclassstr + '">' + tmp.content + '</th>'
        };
        return thstr;
    }
    return {
        restrict: 'AE',
        scope: {
            value: '=ngModel'
        },
        template: '<table><tr>' +
                  rendorHeader() +
                  '</tr>' +
                  '<tr><td>body1</td><td>body1</td><td>body1</td></tr>' +
                  '<tr><td>body1</td><td>body1</td><td>body1</td></tr>' +
                  '<tr><td>body1</td><td>body1</td><td>body1</td></tr>' +
                  '</table>',
        link: function(scope, iElement, iAttrs) {
            
        }
    };
});