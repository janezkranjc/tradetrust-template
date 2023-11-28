import { v2, v3 } from "@tradetrust-tt/tradetrust";

export type BillOfLadingSchemaV2 = v2.OpenAttestationDocument & BillOfLadingDocument;
export type BillOfLadingSchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: BillOfLadingDocument;
};

export type BillOfLadingSchema = BillOfLadingSchemaV2 | BillOfLadingSchemaV3;

export interface BillOfLadingDocument {
  pdf: {
    data: string;
  };
}
