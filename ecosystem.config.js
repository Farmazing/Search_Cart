module.exports = {
    apps: [{
      name: 'tutorial',
      script: './server/server.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-18-218-63-51.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/tutorial.pem',
        ref: 'origin/separateComponents',
        repo: 'git@github.com:Amishon/Search_Cart.git',
        path: '/home/ubuntu/Search_Cart',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }