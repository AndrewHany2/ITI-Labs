class DevelopementTeamLeader {
  constructor(_name) {
    if (DevelopementTeamLeader.instance != null) {
      throw new Error("Can't make two team leader for this team");
    }
    this.name = _name;
    Object.defineProperty(DevelopementTeamLeader, "instance", {
      value: this,
      writable: false,
    });
  }
}
class DesignTeamLeader {
  constructor(_name) {
    if (DesignTeamLeader.instance != null) {
      throw new Error("Can't make two team leader for this team");
    }
    this.name = _name;
    Object.defineProperty(DesignTeamLeader, "instance", {
      value: this,
      writable: false,
    });
  }
}
class QualityControlTeamLeader {
  constructor(_name) {
    if (QualityControlTeamLeader.instance != null) {
      throw new Error("Can't make two team leader for this team");
    }
    this.name = _name;
    Object.defineProperty(QualityControlTeamLeader, "instance", {
      value: this,
      writable: false,
    });
  }
}
class TestingTeamLeader {
  constructor(_name) {
    if (TestingTeamLeader.instance != null) {
      throw new Error("Can't make two team leader for this team");
    }
    this.name = _name;
    Object.defineProperty(TestingTeamLeader, "instance", {
      value: this,
      writable: false,
    });
  }
}
class Developer {
  static TeamLeader = new DevelopementTeamLeader("ali");
  constructor(_name) {
    this.Name = _name;
  }
}

class Designer {
  static TeamLeader = new DesignTeamLeader("ali");
  constructor(_name, _teamLeader) {
    console.log(Designer.TeamLeader);
    if (Designer.TeamLeader != null) {
      throw new Error("Cant take many Team Leaders from this object");
    }
    this.Name = _name;
    Designer.TeamLeader = _teamLeader;
  }
}
class Tester {
  static TeamLeader = new TestingTeamLeader("ali");
  constructor(_name, _teamLeader) {
    console.log(Tester.TeamLeader);
    if (Tester.TeamLeader != null) {
      throw new Error("Cant take many Team Leaders from this object");
    }
    this.Name = _name;
    Tester.TeamLeader = _teamLeader;
  }
}
class QualityControl {
  static TeamLeader = new QualityControlTeamLeader("ali");
  constructor(_name, _teamLeader) {
    console.log(QualityControl.TeamLeader);
    if (QualityControl.TeamLeader != null) {
      throw new Error("Cant take many Team Leaders from this object");
    }
    this.Name = _name;
    QualityControl.TeamLeader = _teamLeader;
  }
}
function Factory() {
  this.createEmployee = function (Name, Department, TeamLeader) {
    switch (Department) {
      case 1:
        return new Developer(Name, TeamLeader);
      case 2:
        return new Tester(Name, TeamLeader);
      case 3:
        return new QualityControl(Name, TeamLeader);
      case "designers":
        return new Designer(Name, TeamLeader);
      default:
        break;
    }
  };
}
var Employees = [];
const f1 = new Factory();
Employees.push(f1.createEmployee("andrew", 1, "mohamed"));
Employees.push(f1.createEmployee("andrew", 1, "ali"));
Employees.push(f1.createEmployee("andrew", 2, "mohamed"));
Employees.push(f1.createEmployee("andrew", 3, "mohamed"));
console.table(Employees);
