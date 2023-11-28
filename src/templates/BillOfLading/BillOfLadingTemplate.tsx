import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { getDocumentData } from "../../utils";
import { BillOfLadingDocument, BillOfLadingSchema } from "./types";
import { css } from "@emotion/core";

const containerStyle = css`
  background-color: #ffffff;
  color: #ffffff;
  padding: 0px;
  margin: auto;
  width: 100%;
  height: 100vh;
  text-align: center;
`;
export const BillOfLadingTemplate: FunctionComponent<TemplateProps<BillOfLadingSchema>> = ({ document }) => {
  const documentData = getDocumentData(document) as BillOfLadingDocument;
  return (
      <embed css={containerStyle} src={`data:application/pdf;base64,${documentData.pdf.data}`} />
  );
};
