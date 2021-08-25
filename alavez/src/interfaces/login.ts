export interface inputsState {
  nick: string;
  email: string;
  password: string;
  re_password: string;
  file?: string;
}

export interface inputComfirm {
  code: string;
  user?: object;
}

export interface a {
  data: inputsState;
}

//인증번호 확인 모달
export interface modal {
  modal: boolean;
  setModal: any;
  user: any;
}

export interface user extends inputsState {
  code: number;
}
