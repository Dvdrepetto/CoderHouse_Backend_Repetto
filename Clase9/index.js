app.engine('ntl', async (filePath, options, callback) => {
    try {
        const content = await fs.readFile(filePath);
        const rendered = content.toString().replace('#title#', '' + options.title + '')
            .replace('#message#', '' + options.message + '');
        return callback(null, rendered);
    } catch (error) {
        return callback(new Error(error));
    }
});