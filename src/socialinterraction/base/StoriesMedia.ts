/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Publication } from "../../publication/base/Publication";
import { User } from "../../user/base/User";
@ObjectType()
class StoriesMedia {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  userid!: string;

  @IsString()
  @Field(() => String)
  entrepriseid!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  type!: string | null;


  @ValidateNested()
  @Type(() => String)
  @IsOptional()
  title?: String | null;

  @ValidateNested()
  @Type(() => String)
  @IsOptional()
  description?: String | null;

  @ValidateNested()
  @Type(() => Number)
  @IsOptional()
  likes?: Number | null;

  @ValidateNested()
  @Type(() => Number)
  @IsOptional()
  comments?: Number | null;

  @ValidateNested()
  @Type(() => Number)
  @IsOptional()
  shares?: Number | null;


  @ValidateNested()
  @Type(() => Number)
  @IsOptional()
    views?: () => Number | null;
  
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}
export { StoriesMedia };