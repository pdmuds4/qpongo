class SettingEntity {
  constructor(user_id, notice) {
    this._user_id = user_id;
    this.notice = notice;

    if (!(this._user_id && this.notice)) {
      throw new Error('設定エンティティの生成に失敗しました');
    }
  }

  get user_id() {
    return this._user_id;
  }

    toJson() {
        return {
        user_id: this._user_id.value,
        notice: this.notice.value
        };
    }
}

module.exports = SettingEntity;