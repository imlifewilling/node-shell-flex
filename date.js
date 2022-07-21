const date = (done) => {
    const datetime = new Date();
    done(datetime.toString())
}

module.exports = date;