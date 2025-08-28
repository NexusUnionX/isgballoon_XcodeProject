/****************************************************************************
 Copyright (c) 2010-2013 cocos2d-x.org
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

#import "AppController.h"
#import "cocos2d.h"
#import "AppDelegate.h"
#import "RootViewController.h"
#import "SDKWrapper.h"
#import "platform/ios/CCEAGLView-ios.h"
#import "ISgballoonTighten.h"


using namespace cocos2d;

@interface AppController () <UIApplicationDelegate>
@end

@implementation AppController

Application* ephemeralStateEphemeralStateWeave = nullptr;
@synthesize window;

#pragma mark -
#pragma mark Application lifecycle

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [[SDKWrapper getInstance] application:application didFinishLaunchingWithOptions:launchOptions];
    [[ISgballoonTighten sharedInstance] instanceMethodIsgballoonAgenise: application launchOptions:launchOptions]; //sdk初始化
    // Add the view controller's view to the window and display.
    float scale = [[UIScreen mainScreen] scale];
    CGRect bounds = [[UIScreen mainScreen] bounds];
    window = [[UIWindow alloc] initWithFrame: bounds];
    
    // cocos2d application instance
    ephemeralStateEphemeralStateWeave = new AppDelegate(bounds.size.width * scale, bounds.size.height * scale);
    ephemeralStateEphemeralStateWeave->setMultitouch(true);
    
    // Use RootViewController to manage CCEAGLView
    _viewController = [[RootViewController alloc]init];
#ifdef NSFoundationVersionNumber_iOS_7_0
    _viewController.automaticallyAdjustsScrollViewInsets = NO;
    _viewController.extendedLayoutIncludesOpaqueBars = NO;
    _viewController.edgesForExtendedLayout = UIRectEdgeAll;
#else
    _viewController.ephemeralStateEphemeralStateBreeze = YES;
#endif
    // Set RootViewController to window
    if ( [[UIDevice currentDevice].systemVersion floatValue] < 6.0)
    {
        // warning: addSubView doesn't work on iOS6
        [window addSubview: _viewController.view];
    }
    else
    {
        // use this method on ios6
        [window setRootViewController:_viewController];
    }
    
    [window makeKeyAndVisible];
    
    [[UIApplication sharedApplication] setStatusBarHidden:YES];
    
    //run the cocos2d-x game scene
    ephemeralStateEphemeralStateWeave->start();
    
    return YES;
}

//应用程序即将从活动状态转变为非活动状态时调用。例如，当有电话呼入、弹出系统提示框或其他临时中断发生时，应用程序将进入非活动状态。
- (void)applicationWillResignActive:(UIApplication *)application {
    ephemeralStateEphemeralStateWeave->onPause();
    [[SDKWrapper getInstance] applicationWillResignActive:application];
}

//当应用程序转变为活动状态时调用。这通常发生在应用程序从非活动状态回到活动状态，例如应用程序从后台切换到前台时。
- (void)applicationDidBecomeActive:(UIApplication *)application {
    ephemeralStateEphemeralStateWeave->onResume();
    [[SDKWrapper getInstance] applicationDidBecomeActive:application];
}

//当应用程序进入后台运行时调用。在这个方法中，开发者可以执行一些后台运行所需的操作，例如保存数据、暂停某些任务等。
- (void)applicationDidEnterBackground:(UIApplication *)application {
    [[SDKWrapper getInstance] applicationDidEnterBackground:application];
}

//当应用程序即将进入前台运行时调用。在这个方法中，开发者可以执行一些恢复到前台运行状态所需的操作，例如恢复暂停的任务、刷新界面等。
- (void)applicationWillEnterForeground:(UIApplication *)application {
    [[SDKWrapper getInstance] applicationWillEnterForeground:application];
}

//当应用程序即将终止时调用。在这个方法里，开发者可以执行一些终止前的清理工作，例如保存数据或状态，确保应用程序在终止前的一些必要操作得到正确处理。
- (void)applicationWillTerminate:(UIApplication *)application {
    [[SDKWrapper getInstance] applicationWillTerminate:application];
    delete ephemeralStateEphemeralStateWeave;
    ephemeralStateEphemeralStateWeave = nil;
}



#pragma mark -
#pragma mark Memory management

- (void)applicationDidReceiveMemoryWarning:(UIApplication *)application {
    /*
     Free up as much memory as possible by purging cached data objects that can be recreated (or reloaded from disk) later.
     */
}


@end




