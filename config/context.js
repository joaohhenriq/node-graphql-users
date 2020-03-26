module.exports = async ({ req }) => {

    //em desenv
    await require('./simularUsuarioLogado')(req)

    const auth = req.headers.authorization
}