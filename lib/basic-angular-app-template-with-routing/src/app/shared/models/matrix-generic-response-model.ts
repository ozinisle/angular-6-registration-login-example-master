import { MatrixGenericResponseStatusType } from './types/matrix-common.types';
import { MatrixGenericResponseModelInterface } from './interface/matrix-generic-response-models.interface';

export class MatrixGenericResponseModel implements MatrixGenericResponseModelInterface {
    status: MatrixGenericResponseStatusType;
    errorMessage: string;
    displayMessage: string;
}
