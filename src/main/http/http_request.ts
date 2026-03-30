export class HttpRequest<
    Body = undefined, 
    Header = undefined, 
    Params = undefined, 
    Token = undefined>{
    
    body?: Body
    header?: Header
    params?: Params
    token?: Token

    constructor(body: Body, header: Header, params: Params, token: Token){

        this.body = body
        this.header = header
        this.params = params
        this.token = token

    }
}