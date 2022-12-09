const axios = require('axios')

const coinModel = require('../model/coinModel')

exports.getcoin = async (req, res) => {
    try {
        let options = {
            method: 'get',
            url: 'https://api.coincap.io/v2/assets',
            headers: {
                Authorization: "Bearer 837a61cf-f653-4abd-88ed-06e81c4e7bee",
            }
        }
        let result = await axios(options)

        let coinData = result.data

        let dataArr = coinData.data

        const deletedbData = await coinModel.deleteMany()

        const createCrypto = await coinModel.create(dataArr)
        
        let sortCrypto = (dataArr).sort((a, b) => a.changePercent24Hr - b.changePercent24Hr)

        console.log(sortCrypto.length)
        console.log(sortCrypto)

        res.status(200).send({ status: true, data: sortCrypto })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}    