import { expect, use } from 'chai';
import sinon from 'sinon';
import chaiAsPromised from 'chai-as-promised';
import { clientsService } from '../../../src/app/services';
import { clientsController } from '../../../src/app/controllers';
import { clientValidator } from '../../../src/app/validators';
import { AddClient } from '../../../src/types';

use(chaiAsPromised);

describe('app/controller/clients.controller', () => {
  beforeEach(sinon.restore)

  describe('method list', () => {
    it('deve lançar se um throw se clientService quebrar', () => {
      sinon.stub(clientsService, 'list').rejects();
      expect(clientsController.list()).to.eventually.to.rejected
    });

    it('deve lançar um array vazio', () => {
      sinon.stub(clientsService, 'list').resolves([])
      expect(clientsController.list()).to.eventually.deep.equal([])
    })
  })

  describe('method add', () => {
    it('deve ser bloqueado na validação pelo bodyAdd', () => {
      sinon.stub(clientValidator, 'bodyAdd').rejects();
      expect(clientsController.add({})).to.eventually.be.rejected;
    });

    it('deve lançar se um throw se clientService quebrar', () => {
      sinon.stub(clientValidator, 'bodyAdd').resolves({} as AddClient)
      sinon.stub(clientsService, 'add').rejects();
      expect(clientsController.add({})).to.eventually.be.rejected;
    })

    it('deve lançar um array vazio', () => {
      sinon.stub(clientValidator, 'bodyAdd').resolves({} as AddClient)
      sinon.stub(clientsService, 'add').resolves();
      expect(clientsController.add({})).to.eventually.deep.equal({});
    })
  })
})
