import { ValueOf } from 'helpers/valueOf';
import axios from 'axios';
import { API_ENUM, ENV } from 'common/common';
import { RequestModel } from 'common/models/common';

export class HistoryService {
  protected apiPath: ValueOf<typeof ENV>

  constructor (apiPath: ValueOf<typeof ENV>) {
    this.apiPath = apiPath
  }

  async getOrderByParam (requestData: RequestModel) {
    // todo here we have type conflict, need to create typed axios request
    return await axios.get(`${this.apiPath}${API_ENUM.HISTORY}`, {
      params: {
        paramName: requestData.paramName,
        paramValue: requestData.paramValue
      }
    })
      .then((response) => response.data)
      .catch((e: string | undefined) => {
        throw new Error(e)
      })
  }
}
