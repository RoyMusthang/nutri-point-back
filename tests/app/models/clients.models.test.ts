import { expect, use } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon'
import { clientsModel } from '../../../src/app/models'
import { clientsDAO } from '../../../src/db'

use(chaiAsPromised)

describe('app/models/clients.model', () => {
  beforeEach(sinon.restore)

  describe('method list', () => {
    it('deve lançar se um throw se clientsDAO quebrar', () => {
      sinon.stub(clientsDAO, 'findAll').rejects();
      expect(clientsModel.list()).to.eventually.to.rejected
    })

    it('deve lançar um array vazio', () => {
      sinon.stub(clientsDAO, 'findAll').resolves([]);
      expect(clientsModel.list()).to.eventually.deep.equal([])
    })
  })

  describe('method add', () => {
    it('deve lançar se um throw se clientsDAO quebrar', () => {
      sinon.stub(clientsDAO, 'create').rejects();
      expect(clientsModel.add({} as any)).to.eventually.be.rejected;
    })
    it('deve lançar um array vazio', () => {
      const createStub = sinon.stub(clientsDAO, 'create').resolves({ id: 1 } as any);
      expect(clientsModel.add({} as any)).to.eventually.equal(1)
      expect(createStub.getCall(0).args[0]).to.ok
    })
  })
})
