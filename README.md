# ng-CustomizeTable

data-format


data = {

    'header' : [
        {'content' : 'header1', 'classNames' : ['test']},
        {'content' : 'header2', 'classNames' : ['test']},
        {'content' : 'header3', 'classNames' : ['test']},
    ],

    'body' : [
        {
        	'classNames' : ['bodytest'], 
        	'contentList': [
        		{'tagContent' : '123'}, 
        		{
        			'tagName' : 'span', 
        			'classNames' : ['123', '124'], 
        			'tagContent' : 'spancontent'},
        		} 
        		{
        			'tagName' : 'span', 
        			'classNames' : [], 
        			'tagContent' : 'spancontent'
        		}
        	]
        }
    ]
}

in data.body each line has classNames for td tag, and in td tag you can both insert some other tags with classed and just fill if with some text.