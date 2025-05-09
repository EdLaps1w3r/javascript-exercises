const getTheTitles = function(objs) {
    let titles = [];
    for (obj of objs) {
        titles.push(obj.title)
    };
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
