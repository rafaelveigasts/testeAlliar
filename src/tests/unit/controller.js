const { expect } = require('chai');
const sinon = require('sinon');

const LabController = require('../../controller/LabController');
const LabService = require('../../service/LabService');

describe('Ao chamar o controller de createLab', () => {
  describe('quando o payload informado não é válido', () => {
    const response = {};
    const request = {};

    before (()=> {
      request.body = {};

      response.status = sinon.stub().returns(response);

      sinon.stub(LabService, 'createLab').resolves({
        code: 400, message: {message: error.message}
      })
    })

    after(() => {
      LabService.createLab.restore();
    }
    )

    it('deve retornar um status 400', async () => {
      await LabController.createLab(request, response);
      expect(response.status.calledWith(400)).to.be.true;
    })
  })

  describe('quando o payload informado é válido', () => {
    const response = {};
    const request = {};

    before (()=> {
      request.body = {
        name: 'Lab 1',
        type: 'Laboratório',
        status: 'Ativo',
      };

      response.status = sinon.stub().returns(response);

      sinon.stub(LabService, 'createLab').resolves({
        id:1,
        name: 'Lab 1',
        type: 'Laboratório',
      })
    })

    after(() => {
      LabService.createLab.restore();
    }
    )

    it('deve retornar um status 200', async () => {
      await LabController.createLab(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    })

    it('é chamado o método json com o objeto', async() => {
      await LabController.createLab(request, response);
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    })
  })
});

describe('ao chamar o controller de getLabById', () => {
  describe('quando não existe o lab', () => {
    const response = {};
    const request = {};

    before (()=> {
      request.params = {
        id: 1000,
      };

      response.status = sinon.stub().returns(response);

      sinon.stub(LabService, 'getLabById').resolves({
        code: 500, message: {message: error.message}
      })
    }
    )

    after(() => {
      LabService.findLabById.restore();
    })

    it('deve retornar um status 500', async () => {
      await LabController.getLabById(request, response);
      expect(response.status.calledWith(500)).to.be.equal(true);
    })
  })
})