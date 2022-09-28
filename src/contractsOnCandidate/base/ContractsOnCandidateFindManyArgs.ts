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
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContractsOnCandidateWhereInput } from "./ContractsOnCandidateWhereInput";
import { Type } from "class-transformer";
import { ContractsOnCandidateOrderByInput } from "./ContractsOnCandidateOrderByInput";

@ArgsType()
class ContractsOnCandidateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ContractsOnCandidateWhereInput,
  })
  @Field(() => ContractsOnCandidateWhereInput, { nullable: true })
  @Type(() => ContractsOnCandidateWhereInput)
  where?: ContractsOnCandidateWhereInput;

  @ApiProperty({
    required: false,
    type: ContractsOnCandidateOrderByInput,
  })
  @Field(() => ContractsOnCandidateOrderByInput, { nullable: true })
  @Type(() => ContractsOnCandidateOrderByInput)
  orderBy?: ContractsOnCandidateOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ContractsOnCandidateFindManyArgs };