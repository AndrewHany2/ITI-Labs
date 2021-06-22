class IFacebookSetting {
  static Accounts = [];
  constructor() {
    if (this.constructor.name === IFacebookSetting) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
    this.Friends = [];
    this.Posts = [];
    IFacebookSetting.Accounts.push(this);
  }

  AddFriend(facebookAcc) {
    this.Friends.push(facebookAcc);
    facebookAcc.Friends.push(this);
  }
  RemoveFriend(targetFacebookAcc) {
    this.Friends = this.Friends.filter((account) => {
      if (targetFacebookAcc != account) {
        return account;
      }
    });
  }
  SendMessageToAllFriend(msg) {
    this.Friends.forEach((friend) => {
      friend.MsgNotification(msg, friend);
    });
  }
  PostsPushNotification(post) {
    this.Friends.forEach((friend) => {
      friend.PostNotification(post, friend);
    });
  }
  CommentsPushNotification(comment, facebookAccount) {
    this.Friends.forEach((acc) => {
      if (acc === facebookAccount) {
        acc.CommentsNotification(acc, comment);
      }
    });
  }
  SendMessageForPrivateFriend(msg, targetFriend) {
    this.Friends.forEach((friend) => {
      if (friend === targetFriend) {
        friend.SendMessage(friend, msg);
      }
    });
  }
  AddPost(content) {
    let post = new Post(content);
    this.Posts.push(post);
    return post;
  }
  AddComment(comment, post) {
    this.Posts.forEach((p) => {
      if (p === post) {
        post.Comments.push(comment);
      }
    });
    return comment;
  }
}
class FacebookAccount extends IFacebookSetting {
  constructor(_name, _age) {
    super();
    this.Name = _name;
    this.Age = _age;
  }
  MsgNotification(msg, friend) {
    console.log(
      `Message from ${this.Name} to you "${msg}", I'm ${friend.Name}`
    );
  }
  PostNotification(post, friend) {
    console.log(
      `${this.Name} just added a post "${post.Content}", I'm ${friend.Name}`
    );
  }
  CommentsNotification(acc, comment) {
    console.log(`${acc.Name} just commented "${comment}" to you`);
  }
  SendMessage(friend, msg) {
    console.log(
      `Message from ${this.Name} to you "${msg}", I'm ${friend.Name}`
    );
  }
}
class Post {
  constructor(_content) {
    this.Content = _content;
    this.Comments = [];
  }
}
const MyAccount = new FacebookAccount("Andrew", 25);
const Acc1 = new FacebookAccount("Mohamed", 26);
const Acc2 = new FacebookAccount("Ahmed", 27);
const Acc3 = new FacebookAccount("Ali", 28);
const Acc4 = new FacebookAccount("Mahmoud", 29);
MyAccount.AddFriend(Acc1);
MyAccount.AddFriend(Acc2);
MyAccount.AddFriend(Acc3);
let p1 = MyAccount.AddPost("that's first post test");
MyAccount.PostsPushNotification(p1);

let p2 = Acc2.AddPost("that's second post test");
Acc2.PostsPushNotification(p2);

let p3 = Acc2.AddPost("that's third post test");
Acc2.PostsPushNotification(p3);

let m1 = Acc2.AddComment("third post comment", p3);
console.log(m1);
MyAccount.CommentsPushNotification(m1, Acc2);
MyAccount.SendMessageForPrivateFriend("hi test", Acc2);
