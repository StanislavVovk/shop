import { ValueOf } from '../../helpers/valueOf';
import { ENV } from '../../common/enums/ENV/env';
import axios from 'axios';
import { API_ENUM } from '../../common/common';

export class HistoryService {
  protected apiPath: ValueOf<typeof ENV>

  constructor (apiPath: ValueOf<typeof ENV>) {
    this.apiPath = apiPath
  }

  async getOrderByParam (name: string, value: string) {
    return await axios.get(`${this.apiPath}${API_ENUM.HISTORY}`, { params: { paramName: name, paramValue: value } })
      .then((data: any) => data)
      .catch((e: string | undefined) => {
        throw new Error(e)
      })
  }
}
