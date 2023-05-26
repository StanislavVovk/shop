import { HTTPHeaders, HTTPMethods } from '../../common/common';
// import { ParsedUrlQueryInput, stringify } from 'querystring';

interface IOptions {
  method: HTTPMethods
  payload?: string
  contentType?: string
  query?: any
}

export class Http {
  async load (url: string, options: IOptions) {
    const { method = HTTPMethods.GET, payload = null, contentType, query } = options
    const headers = this._getHeaders(contentType)
    if (query) {
      return await fetch(this._getURL(url, query), {
        method,
        headers,
        body: payload
      }).then(this._parseJSON)
        .catch(this._throwError);
    }
    return await fetch(this._getURL(url), {
      method,
      headers,
      body: payload
    }).then(this._parseJSON)
      .catch(this._throwError);
  }

  _getHeaders (contentType?: string) {
    const headers = new Headers()
    if (contentType) headers.append(HTTPHeaders.CONTENT_TYPE, contentType)

    return headers
  }

  _getURL (url: string, query?: any) {
    return `${url}${query ? `?${query}` : ''}`;
  }

  _parseJSON (response: any) {
    return response.json();
  }

  _throwError (err: string) {
    throw new Error(err);
  }
}
