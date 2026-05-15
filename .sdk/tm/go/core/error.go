package core

type FreepublicapisError struct {
	IsFreepublicapisError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewFreepublicapisError(code string, msg string, ctx *Context) *FreepublicapisError {
	return &FreepublicapisError{
		IsFreepublicapisError: true,
		Sdk:              "Freepublicapis",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *FreepublicapisError) Error() string {
	return e.Msg
}
