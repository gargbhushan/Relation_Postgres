import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  //@Get()
  //getHello():string {
   // return this.appService.getHello();
  //}


  @Get()
  async getHello(): Promise<any> {
    //await this.appService.seed();
    return this.appService.getEmployeeById(1);
  }

  //@Post()
    //create(@Body()userPost:UserPost): Observable<UserPost>{
      //  return this.userService.createPost(userPost);       
    //}
    
    //@Get()
    //findAll():Observable<UserPost[]>{
      //  return this.userService.findAllPosts();
      //}
  
    //@Get(':id')
    //find(@Param('id') id:number): Promise<UserPost> {
     //return this.userService.FindOne(id); 
    //}

    //@Put(':id')
    //update(
      //@Param('id')id:number,
      //@Body() userPost:UserPost ): Observable<UpdateResult>{
      //return this.userService.updatePost(id,userPost);
    //}
       
    //@Delete(':id')
    //delete(@Param('id') id:number):Observable<DeleteResult> {
     // return this.userService.deletePost(id);
    //}

}

//deleteEmployee();