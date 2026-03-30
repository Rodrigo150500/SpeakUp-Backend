export class HttpResponse<Body = undefined>{

    body?: Body
    status_code: number

    constructor(body: Body, status_code: number,){
        this.body = body
        this.status_code = status_code
    }

}

