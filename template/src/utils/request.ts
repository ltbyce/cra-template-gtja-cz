export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response: Response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
async function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new ResponseError(response);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export async function request(
  url: string,
  options?: RequestInit,
): Promise<{} | { err: ResponseError }> {
  const fetchResponse = await fetch(url, options);
  const response = await checkStatus(fetchResponse);
  return parseJSON(response);
}

/**
 * post
 * @param url
 * @param params
 * @param options
 */
export async function post(
  url: string,
  params: Record<string, any>,
  options?: Record<string, any>,
): Promise<{} | { err: ResponseError }> {
  return request(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      ...options,
    },
    body: JSON.stringify(params),
  });
}

/**
 * get
 * @param url
 * @param params
 * @param options
 */

export async function get(
  url: string,
  params?: Record<string, any>,
  options?: Record<string, any>,
): Promise<{} | { err: ResponseError }> {
  if (params) {
    const paramsArray: string[] = [];
    //拼接参数
    Object.keys(params).forEach(key =>
      paramsArray.push(key + '=' + params[key]),
    );

    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&');
    } else {
      url += '&' + paramsArray.join('&');
    }
  }
  return request(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      ...options,
    },
  });
}

/**
 * put
 * @param url
 * @param params
 * @param options
 */
export async function put(
  url: string,
  params: Record<string, any>,
  options?: Record<string, any>,
): Promise<{} | { err: ResponseError }> {
  return request(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      ...options,
    },
    body: JSON.stringify(params),
  });
}

/**
 * delete
 * @param url
 * @param params
 * @param options
 */
export async function del(
  url: string,
  params: Record<string, any>,
  options?: Record<string, any>,
): Promise<{} | { err: ResponseError }> {
  if (params) {
    url += '/' + Object.values(params).join('/');
  }
  return request(url, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      ...options,
    },
    body: JSON.stringify(params),
  });
}
