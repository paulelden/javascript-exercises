const getTheTitles = function(arr) {
    let titles = arr.map(book => {
        console.log(book.title);
        return book.title;
    });

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
