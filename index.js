data = {
    'header' : [
        {'content' : 'header1', 'classNames' : ['test']},
        {'content' : 'header2', 'classNames' : ['test']},
        {'content' : 'header3', 'classNames' : ['test']},
    ],
    'body' : [
        {'classNames' : ['bodytest'], 'contentList': [{'tagContent' : '123'}, {'tagName' : 'span', 'classNames' : ['123', '124'], 'tagContent' : 'spancontent'}, {'tagName' : 'span', 'classNames' : [], 'tagContent' : 'spancontent'}]},
        {'classNames' : ['bodytest2'], 'contentList': [{'tagContent' : '123'}, {'tagName' : 'span', 'classNames' : ['1', '2'], 'tagContent' : 'spancontent'}, {'tagName' : 'span', 'classNames' : [], 'tagContent' : 'spancontent'}]},
        {'classNames' : ['bodytest3'], 'contentList': [{'tagContent' : '123'}, {'tagName' : 'span', 'classNames' : ['2', '3'], 'tagContent' : 'spancontent'}, {'tagName' : 'span', 'classNames' : [], 'tagContent' : 'spancontent'}]},
        {'classNames' : ['bodytest4'], 'contentList': [{'tagContent' : '123'}, {'tagName' : 'span', 'classNames' : ['3', '4'], 'tagContent' : 'spancontent'}, {'tagName' : 'span', 'classNames' : [], 'tagContent' : 'spancontent'}]}
    ]
};

angular.module('demo', [])

.controller('DemoController', function($scope) {

})

.directive('customTable', function() {
    function rendorHeader() {
        var thstr = '';
        for (var i = 0; i < data.header.length; i++) {
            var tmp = data.header[i];
            thclassstr = '';
            for (var j = 0; j < tmp.classNames.length; j++) {
                thclassstr += tmp.classNames[j] + ' ';
            };
            thstr += '<th ' + 'class="' + thclassstr + '">' + tmp.content + '</th>';
        };
        return thstr;
    }

    function rendorBody() {
        var tbstr = '';
        for (var i = 0; i < data.body.length; i++) {
            tbstr += '<tr>'
            var tmp = data.body[i];
            var tdtmp = '<td ';
            tbclassstr = '';
            for (var j = 0; j < tmp.classNames.length; j++) {
                tbclassstr += tmp.classNames[j] + ' ';
            };
            tdtmp += 'class="' + tbclassstr + ' ">';
            for (var j = 0; j < tmp.contentList.length; j++) {
                var tdstr = tdtmp;
                if (!tmp.contentList[j].tagName) {
                    tdstr += tmp.contentList[j].tagContent; 
                } else {
                    var tdcclassstr = ''
                    for (var k = 0; k < tmp.contentList[j].classNames.length; k++) {
                        tdcclassstr += tmp.contentList[j].classNames[k] + ' ';
                    }
                    console.log(tdcclassstr);
                    console.log(tmp.contentList[j].tagName);
                    console.log(tmp.contentList[j].tagContent);

                    //debugger
                    tdstr += '<'+ tmp.contentList[j].tagName + ' class="' + tdcclassstr +'" >' + tmp.contentList[j].tagContent + '</' + tmp.contentList[j].tagName + '>';
                }
                tdstr += '</td>'
                tbstr += tdstr;
            };
            tbstr += '</tr>';
        };
        return tbstr;
    }
    return {
        restrict: 'AE',
        scope: {
            value: '=ngModel'
        },
        template: '<table><tr>' +
                  rendorHeader() +
                  '</tr>' +
                  rendorBody() +
                  '</table>',
        link: function(scope, iElement, iAttrs) {
            
        }
    };
});