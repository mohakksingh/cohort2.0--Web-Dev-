import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";

export const userRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string;
        JWT_SECRET:string;
    }
}>();

userRouter.post("/signup", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    try{
      const user=await prisma.user.create({
        data:{
          email:body.email,
          password:body.password,
          name:body.name
        }
      })
      const jwt=await sign({
        id:user.id
       },c.env.JWT_SECRET)
      return c.text(jwt)
    }
    catch(e){
      c.status(411);
      return c.text("Invalid")
    }
    
  });
  
userRouter.post("/api/v1/user/signin", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    try{
      const user=await prisma.user.findFirst({
        where:{
          email:body.email,
          password:body.password,
        }
      })
      if(!user){
        c.status(403);
        return c.text("Invalid User")
      }
      const jwt=await sign({
        id:user.id
       },c.env.JWT_SECRET)
      return c.text(jwt)
    }
    catch(e){
      c.status(411);
      return c.text("Invalid")
    }
  });