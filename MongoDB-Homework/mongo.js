// написать следующие запросы:

// Написать запрос для поиска всех студентов, у которых score > 87% и < 93% 
// по любому из типов выполненных заданий.

// $gt Matches values that are greater than a specified value.
// $lt	Matches values that are less than a specified value.

db.resultsCollection.find({
	"scores.score": {
		$gt: 87,
		$lt: 93
	} 
}).pretty()

// Написать запрос-агрегацию для выборки всех студентов, у которых результат 
// по экзамену (type: "exam") более 90% (использование unwind)

/*
$and performs a logical AND operation on an array of two or more expressions 
(e.g. <expression1>, <expression2>, etc.) and selects the documents that 
satisfy all the expressions in the array

$unwind Deconstructs an array field from the input documents to output 
a document for each element. Each output document is the input document
with the value of the array field replaced by the element.

$match Filters the documents to pass only the documents that match 
the specified condition(s) to the next pipeline stage.
*/

db.resultsCollection.aggregate([{
	$unwind : "$scores"
}, {
	$match: {
		$and: [{
			"scores.type": "exam"
		} , {
			"scores.score": {
				$gt: 90
			}
		}
		]
	}
} 
]).pretty()


// Студентам с именем Dusti Lemmond добавить поле “accepted” со значением true.

db.resultsCollection.update({
	"name": "Dusti Lemmond"
}, {
	$set: {
		"accepted": "true"
	}
}, {
	multi: true
})
