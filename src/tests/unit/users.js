import should from 'should'
import userModel from '../../models/users'
import * as msgs from '../../helpers/messages.json'

let users = new userModel({
    key: 'Sublab'
})
describe('Users test suite', () => {
    it('Should not allow empty username', () => {
        users.save( (err, res) => {
            should.not.exist(res)
        }
        )
    })

    it('Should not allow empty keys', () => {
        users.save((err, res) => {
            err.should.have.property('message', msgs.missingName)
        }
        )
    })
})