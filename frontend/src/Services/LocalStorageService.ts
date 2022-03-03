import { SessionState } from "../Store/States/Session.state";

class LocalStorageService {
  public static GetSessions = (): Array<SessionState> => {
    let sessionArray = JSON.parse(localStorage.getItem("Session")!);
    return sessionArray;
  };
  public static DeleteSession = (sessionId: any) => {
    let sessionArray = JSON.parse(localStorage.getItem("Session")!);
    let newArray = sessionArray.filter(
      (session: { id: string | undefined }) => session.id !== sessionId
    );
    localStorage.setItem("Session", JSON.stringify(newArray));
    return newArray;
  };
  public static GetSelectSession = (
    sessionId: string
  ): SessionState | undefined => {
    const storageArray = JSON.parse(localStorage.getItem("Session")!);
    return storageArray?.find(
      (session: { id: string }) => session.id === sessionId
    );
  };
  public static SetStorageArray = (input: SessionState) => {
    const storageArray = LocalStorageService.GetSessions();
    if (storageArray) {
      const x = storageArray.findIndex(
        (session: SessionState) => session.id === input.id
      );
      if (x < 0) {
        localStorage.setItem(
          "Session",
          JSON.stringify([...storageArray, input])
        );
      } else {
        storageArray[x] = input;
        localStorage.setItem("Session", JSON.stringify(storageArray));
      }
    } else {
      localStorage.setItem("Session", JSON.stringify([input]));
    }
  };
  public static GetFromStorage = (): SessionState | undefined => {
    const getLocalState = localStorage.getItem("Session");
    if (!getLocalState) {
      return undefined;
    }
    const localState = JSON.parse(getLocalState);
    return {
      ...localState,
    } as SessionState;
  };
}
export default LocalStorageService;
