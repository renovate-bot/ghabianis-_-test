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
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EntrepriseWhereUniqueInput } from "../../entreprise/base/EntrepriseWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CandidateWhereUniqueInput } from "../../candidate/base/CandidateWhereUniqueInput";
@InputType()
class FollowEntrepriseCreateInput {
  @ApiProperty({
    required: false,
    type: () => EntrepriseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EntrepriseWhereUniqueInput)
  @IsOptional()
  @Field(() => EntrepriseWhereUniqueInput, {
    nullable: true,
  })
  entreprise?: EntrepriseWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CandidateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CandidateWhereUniqueInput)
  @IsOptional()
  @Field(() => CandidateWhereUniqueInput, {
    nullable: true,
  })
  candidate?: CandidateWhereUniqueInput | null;
}
export { FollowEntrepriseCreateInput };