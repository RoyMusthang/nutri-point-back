import { expect, use } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon'
import { clientsModel } from '../../../src/app/models';
import { clientsService } from '../../../src/app/services'

use(chaiAsPromised);

describe('app/services/clients.service', () => {
  beforeEach(sinon.restore)

  describe('method list', () => {
    it('deve lançar se um throw se clientModel quebrar', () => {
      sinon.stub(clientsModel, 'list').rejects();
      expect(clientsService.list()).to.eventually.to.rejected
    });

    it('deve lançar um array vazio', () => {
      sinon.stub(clientsModel, 'list').resolves([])
      expect(clientsService.list()).to.eventually.deep.equal([])
    })
  })

  describe('method add', () => {
    it('deve lançar se um throw se clientModel quebrar', () => {
      sinon.stub(clientsModel, 'add').rejects();
      expect(clientsService.add({} as any)).to.eventually.be.rejected;
    })

    it('deve lançar um array vazio', () => {
      sinon.stub(clientsModel, 'add').resolves();
      expect(clientsService.add({} as any)).to.eventually.deep.equal({});
    })
  })
})
