"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatusValidationStatus = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("../user.model");
class UserStatusValidationStatus {
    constructor() {
        this.StatusOption = [
            user_model_1.UserStatus.ACTIVE,
            user_model_1.UserStatus.INACTIVE
        ];
    }
    isStatusValid(status) {
        const index = this.StatusOption.indexOf(status);
        return index !== -1;
    }
    transform(value, metadata) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException("This status not available in the Status Option");
        }
    }
}
exports.UserStatusValidationStatus = UserStatusValidationStatus;
//# sourceMappingURL=user-status-validation.pipe.js.map