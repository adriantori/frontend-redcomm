export default defineEventHandler(async(event) => {

    //handle query params
    const { name } = getQuery(event)

    return {
        message: `Hello, ${name}.`
    }

})